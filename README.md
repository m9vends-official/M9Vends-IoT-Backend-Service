# IoT Provisioning & Management Backend Service

## For Local Testing

1. Clone the Repository
2. Run following commands inside the root folder of this Repository

```bash
npm install
```

```bash
npm run dev
```

## Deployment Commands

### Build Command

```bash
npm install && npm run build
```

### Start Command

```bash
npm run start
```

## Testing Commands

### Testing in Interactive mode

```bash
npm run test
```

### Verbose While Testing

```bash
npm run test:verbose
```

## API Documentation

Detailed documentation for all backend API endpoints is available here:

- [Provision Device API](docs/provision.md): Registers and provisions a device to a specific user.
- [Device Wake-up & Registration API](docs/wakeup.md): Registers a new device or updates the state of an existing device.
- [Connect Device API](docs/connect.md): Generates JWT-based MQTT credentials for provisioned devices.
- [Get Device(s) API](docs/get.md): Retrieves device(s) configuration by device ID or owner/user ID.
- [Remove Device API](docs/remove.md): Unlinks a device from an owner or completely deletes it from the database.
