// Service Worker for handling CORS requests on GitHub Pages
const API_DATA = {
    "streamer": "UP",
    "extension": "wormup",
    "game": "Wormate.io",
    "note": "Please don't copy my code",
    "programmer": "TeamUP",
    "e": "not_empty",
    "z": "c",
    "s11": "0.0.0.0.0.0.0.0.0.0.0",
    "sw": 1,
    "tt": 0,
    "vs": 140,
    "dsg": [],
    "propertyList": [
        // ... (truncated for brevity, but would include all the data)
    ],
    "cc": "<style>...</style>",
    "mb": "<div class='info-message success'>...</div>",
    "cm": "",
    "cr": "",
    "ccc": "iq",
    "ccg": ["Will Kill and Headshot statistics be removed?", "There was a connection problem!", "Your account has been locked.", "RESPAWN", "Full Screen", "In the game", "⚙️ Settings", "ID", "ID COPY", "COPY ID", "Country", "Remember kill and headshot counts", "ON/OFF", "Background image", "COPY", "Vietnam", "Thailand", "Cambodia", "Indonesia", "Singapore", "Japan", "Mexico", "Brazil", "Canada", "Germany", "France", "England", "Australia", "USA", "Portugal", "Shortcut", "Dark blue sky", "Purple sky", "Clouds", "💡", "Turkey", "Arabs"],
    "is_subscriber": true,
    "show_discord": false,
    "player_name": "YT",
    "server_time": "2030-07-28 19:28:26"
};

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Handle API requests
    if (url.pathname.includes('/api') || url.pathname.includes('/check')) {
        event.respondWith(handleAPIRequest(event.request));
    }
});

async function handleAPIRequest(request) {
    const method = request.method;
    
    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
        'Access-Control-Max-Age': '3600',
        'Content-Type': 'application/json'
    };
    
    // Handle preflight OPTIONS request
    if (method === 'OPTIONS') {
        return new Response(null, {
            status: 200,
            headers: corsHeaders
        });
    }
    
    // Handle GET and POST requests
    if (method === 'GET' || method === 'POST') {
        return new Response(JSON.stringify(API_DATA), {
            status: 200,
            headers: corsHeaders
        });
    }
    
    // Handle unsupported methods
    return new Response(JSON.stringify({
        error: 'Method not allowed. Only GET, POST, and OPTIONS are supported.'
    }), {
        status: 405,
        headers: {
            ...corsHeaders,
            'Allow': 'GET, POST, OPTIONS'
        }
    });
}

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
