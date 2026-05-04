const staticCacheName= 's-app-v1';
const dynamicCacheNme= 'd-app-v1';
const AddUrls = [
  
  '/index.html'
  
];

self.addEventListener('install', async event=>{
    try {
        const cache = await caches.open(staticCacheName);
        await cache.addAll(AddUrls);
        
    } catch (error) {
        console.log(error)
    }
})

self.addEventListener("activate", async event=>{
    const cacheNames = await caches.keys();
    await Promise.all(
        cacheNames.filter(name=> name!==staticCacheName)
        .filter(name=> name!== dynamicCacheNme)
        .map(name=> caches.delete(name))
    );
})

self.addEventListener("fetch", async event=>{
 const request = event.request;
 const url = new URL(request.url);

 if(url.origin===location.origin){
    event.respondWith(cacheFirst(request));
 }
 else{
    event.respondWith(networkFirst(request));
 }
})

async function cacheFirst(request) {
    const cache = await caches.match(request);
    return cache ?? fetch(request);
    
}
async function networkFirst(request) {
    const cached = await caches.open(dynamicCacheNme);
    try {
        const response = await fetch(request);
        await cached.put(request, response.clone());
        return response;
        
    } catch (e) {
        const cache = await caches.match(request);
        return cache ?? (await caches.match("/offline.html"));
    }
}