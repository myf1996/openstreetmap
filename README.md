# Open Street Map

```
Express application which work as serverless (AWS Lambda) and server both, application has 3 endpoint swagger (docs), health, & map which take 4 parameters (minLon, minLat, maxLon, maxLat) which works as bbox in openstreenmap API   
```
### Requirements
```
node = 16.17.1
npm = 8.15.0
```

### .ENV (Example)
```
ENV=dev
PORT=8000
OPENSTREETMAP_BASE_URL=https://www.openstreetmap.org
```

### Installation & Server Test & Start
```
npm install
npm run test
npm run start
```

### Swagger (Docs)
```
http://localhost:8000/openstreetmap/swagger
```

### Application Health Status
```
http://localhost:8000/openstreetmap/health
```

### Example
```
http://localhost:8000/openstreetmap/map?minLon=73.0288&minLat=33.0585&maxLon=74.0706&maxLat=33.0890
```

### Misc
```
application basePath = /openstreetmap/
```

### Contact
```

```
