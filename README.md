# 🚀 Lead Manager

A simple Lead Management system built with **Next.js**, **Node.js**, **Express**, and **PostgreSQL** (via Prisma). It allows users to view and add leads through a basic UI.

---

## ⚙️ Backend Setup (`lead-manager-backend`)

### 1. Clone the Repo

```bash
git clone git@github.com:SaboorSohaib/lead-management-back-end.git
cd lead-management-back-end
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create PostgreSQL Database

Make sure PostgreSQL is installed and running.

Create a database named:

```
leadmanager
```

### 4. Configure `.env`

Create a `.env` file and add your database URL:

```env
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/leadmanager"
```

### 5. Set Up Prisma

```bash
npx prisma db push
npx prisma generate
```

### 6. Run the Server

```bash
npm run dev
```

> Server runs at: [http://localhost:4000](http://localhost:4000)

## 📦 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | `/api/leads` | Add a new lead      |
| GET    | `/api/leads` | Get all saved leads |

---

## 🧱 Lead Model

Each lead contains the following fields:

- `name` (String, Required)
- `email` (String, Required, Unique)
- `status` (Enum): `"New"`, `"Engaged"`, `"ProposalSent"`, `"ClosedWon"`, `"ClosedLost"`
- `createdAt` (Timestamp)

---

## 🙌 Contribution

Feel free to fork this repo, submit pull requests, or open issues.

---

## 📄 License

MIT
