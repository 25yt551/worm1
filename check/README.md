# Wormate.io Extension API

Enhanced API endpoint for Wormate.io game extension with improved CORS handling and proper error responses.

## Features

- ✅ Comprehensive CORS headers
- ✅ Proper HTTP 405 error handling  
- ✅ JSON error responses
- ✅ Method validation (GET, POST, OPTIONS)
- ✅ Premium subscription support
- ✅ Multi-language support (Arabic/English)

## API Endpoint

```
GET  /check.php  - Returns game configuration and available items
POST /check.php  - Accepts game data updates
```

## CORS Headers

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD`
- `Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept, Origin`
- `Access-Control-Max-Age: 3600`

## Error Handling

Invalid HTTP methods return proper JSON error responses:

```json
{"error": "Method not allowed. Only GET, POST, and OPTIONS are supported."}
```

## Testing

```bash
# Valid request
curl -X GET https://yourusername.github.io/worm2/check.php

# Invalid method (returns 405)
curl -X DELETE https://yourusername.github.io/worm2/check.php
```

## Deployment

This repository is automatically deployed to GitHub Pages.
