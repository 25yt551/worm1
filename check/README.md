# Wormate.io Extension API

Enhanced API endpoint for Wormate.io game extension with improved CORS handling and proper error responses.

## Features

- ✅ Comprehensive CORS headers
- ✅ Proper HTTP 405 error handling  
- ✅ JSON error responses
- ✅ Method validation (GET, POST, OPTIONS)
- ✅ Premium subscription support
- ✅ Multi-language support (Arabic/English)

## API Endpoints

### Static JSON (Recommended for GitHub Pages)
```
GET  /check.json  - Returns game configuration and available items (static)
```

### CORS-Enabled API (GitHub Pages Compatible)
```
GET  /api.html?method=GET   - CORS-enabled endpoint
GET  /api.html?method=POST  - CORS-enabled endpoint  
GET  /api.html?method=OPTIONS - CORS preflight handling
```

### PHP Version (For PHP-enabled servers)
```
GET  /check.php  - Returns game configuration with enhanced CORS
POST /check.php  - Accepts game data updates
```

## CORS Support

The API includes multiple solutions for CORS issues on GitHub Pages:

- **Static JSON**: Simple file serving (limited CORS support)
- **HTML-based API**: JavaScript-powered CORS handling  
- **Service Worker**: Advanced CORS request interception
- **PHP Version**: Full server-side CORS implementation

### CORS Headers Provided:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD`
- `Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept, Origin`
- `Access-Control-Max-Age: 3600`

## Error Handling

Invalid HTTP methods return proper JSON error responses:

```json
{"error": "Method not allowed. Only GET, POST, and OPTIONS are supported."}
```

## Testing

```bash
# Static JSON endpoint
curl -X GET https://yourusername.github.io/worm2/check.json

# CORS-enabled API
curl -X GET "https://yourusername.github.io/worm2/api.html?method=GET"

# PHP endpoint (if supported)
curl -X GET https://yourusername.github.io/worm2/check.php

# Test 405 error
curl -X DELETE https://yourusername.github.io/worm2/check.php
```

## Solving the 405 OPTIONS Issue

The 405 error you encountered with `OPTIONS` requests to `/check.json` is a common GitHub Pages limitation. Our solutions:

1. **Use `api.html`**: Handles CORS preflight requests properly
2. **JSONP Support**: Add `?callback=functionName` for cross-origin requests  
3. **Service Worker**: Advanced request interception (see `sw.js`)
4. **Direct JSON**: Use `/check.json` for same-origin requests only

## Deployment

This repository is automatically deployed to GitHub Pages.
