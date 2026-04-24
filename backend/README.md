# SaaS Backend - Express API

A production-ready REST API built with Node.js and Express for SaaS applications.

## 🚀 Features

- **Express.js**: Fast, unopinionated web framework
- **Security**: Helmet.js, CORS, rate limiting
- **Validation**: Input validation and sanitization
- **Error Handling**: Centralized error management
- **Logging**: Request/response logging
- **MVC Architecture**: Clean separation of concerns
- **MongoDB Ready**: Structure prepared for database migration
- **Production Ready**: Environment-based configuration

## 📁 Project Structure

```
backend/
├── controllers/         # Route controllers
│   └── leadController.js
├── routes/             # API routes
│   └── leadRoutes.js
├── models/             # Data models (in-memory, MongoDB-ready)
│   └── Lead.js
├── middlewares/         # Custom middleware
│   ├── errorHandler.js
│   └── logger.js
├── config/             # Configuration files
├── utils/              # Utility functions
├── .env                # Environment variables
├── package.json
├── server.js           # Main server file
└── README.md
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Configure your environment in `.env`:
```
PORT=5000
NODE_ENV=development
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
The API will be available at [http://localhost:5000](http://localhost:5000).

### Production Mode
```bash
npm start
```

## 📚 API Endpoints

### Lead Management

#### Create Lead
```http
POST /api/lead
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "Interested in your service"
}
```

#### Get All Leads
```http
GET /api/lead
```

#### Get Lead by ID
```http
GET /api/lead/:id
```

### Health Check
```http
GET /health
```

## 🛡️ Security Features

### Helmet.js
- Sets security-related HTTP headers
- Protects against XSS attacks
- Prevents clickjacking

### Rate Limiting
- 100 requests per 15 minutes per IP
- Configurable limits
- Automatic blocking

### CORS Configuration
- Environment-specific origins
- Credential support
- Secure headers

### Input Validation
- Required field validation
- Email format validation
- Data sanitization

## 🏗️ Architecture

### MVC Pattern
- **Models**: Data structure and validation
- **Views**: Not applicable (API-only)
- **Controllers**: Business logic and request handling

### Middleware Stack
1. **Helmet**: Security headers
2. **Rate Limiting**: Request throttling
3. **CORS**: Cross-origin handling
4. **JSON Parser**: Request body parsing
5. **Logger**: Request logging
6. **Routes**: API endpoints
7. **Error Handler**: Centralized error management

### Error Handling
- Custom error classes
- Consistent error responses
- Development vs production error details
- Logging integration

## 📊 Data Storage

### Current Implementation
- In-memory array storage
- Auto-incrementing IDs
- Ready for database migration

### MongoDB Migration Ready
The Lead model is structured for easy MongoDB migration:

```javascript
// Current in-memory model
class Lead {
  constructor(data) {
    this.id = nextId++;
    this.name = data.name;
    this.email = data.email;
    this.createdAt = new Date();
  }
}

// Future MongoDB schema (example)
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: String,
  message: String,
  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now }
});
```

## 🔧 Configuration

### Environment Variables
```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# Database (when migrated)
MONGODB_URI=mongodb://localhost:27017/saas-app

# Security
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 📝 Logging

### Request Logging
- Timestamp, method, URL, IP
- Response time tracking
- Status code logging

### Error Logging
- Stack traces in development
- Error details for debugging
- Production-safe error messages

## 🚀 Deployment

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### PM2 (Process Manager)
```bash
npm install -g pm2
pm2 start server.js --name "saas-api"
pm2 startup
pm2 save
```

### Environment Setup
```bash
# Production
NODE_ENV=production
PORT=5000

# Development
NODE_ENV=development
PORT=5000
```

## 🧪 Testing

### API Testing with curl
```bash
# Create lead
curl -X POST http://localhost:5000/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'

# Get all leads
curl http://localhost:5000/api/lead

# Health check
curl http://localhost:5000/health
```

### Postman Collection
Import the following collection for easy testing:

```json
{
  "info": {
    "name": "SaaS API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Create Lead",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"name\":\"John Doe\",\"email\":\"john@example.com\"}"
        },
        "url": {
          "raw": "{{baseUrl}}/api/lead",
          "host": ["{{baseUrl}}"],
          "path": ["api", "lead"]
        }
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:5000"
    }
  ]
}
```

## 🔮 Future Enhancements

### Database Integration
- MongoDB with Mongoose
- Connection pooling
- Database migrations

### Authentication & Authorization
- JWT tokens
- Role-based access control
- API key management

### Advanced Features
- File uploads
- Email notifications
- Webhook integrations
- Analytics and monitoring

### Performance
- Response caching
- Database indexing
- Load balancing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, please contact [support@example.com](mailto:support@example.com) or open an issue on GitHub.
