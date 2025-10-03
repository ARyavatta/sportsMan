# 🎾 Sports Management Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646CFF.svg)](https://vitejs.dev/)
[![Material Tailwind](https://img.shields.io/badge/Material--Tailwind-2.1.4-00ACC1.svg)](https://material-tailwind.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.4-38B2AC.svg)](https://tailwindcss.com/)
[![ApexCharts](https://img.shields.io/badge/ApexCharts-3.44.0-F39C12.svg)](https://apexcharts.com/)

![Sports Management Dashboard](https://via.placeholder.com/800x400/1e293b/ffffff?text=Sports+Management+Dashboard)

A comprehensive sports management dashboard built with React, Material Tailwind, and modern web technologies. This dashboard provides sports organizations with powerful tools to manage players, teams, matches, and performance analytics.

## ✨ Features

- **📊 Real-time Analytics** - Track player performance, team statistics, and match results
- **👥 Player Management** - Comprehensive player profiles and performance tracking
- **🏆 Team Management** - Organize teams, track progress, and manage rosters
- **📅 Match Scheduling** - Schedule matches, track results, and manage fixtures
- **📈 Interactive Charts** - Beautiful charts powered by ApexCharts
- **🎨 Modern UI** - Built with Material Tailwind and Tailwind CSS
- **📱 Responsive Design** - Works perfectly on all devices
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds

## 🚀 Technology Stack

### Frontend Framework

- **React 18.2.0** - Modern React with hooks and concurrent features
- **Vite 4.5.0** - Next-generation frontend tooling for fast development

### UI & Styling

- **Material Tailwind 2.1.4** - Material Design components for Tailwind CSS
- **Tailwind CSS 3.3.4** - Utility-first CSS framework
- **Hero Icons 2.0.18** - Beautiful hand-crafted SVG icons

### Charts & Data Visualization

- **ApexCharts 3.44.0** - Modern & interactive charts
- **React ApexCharts 1.4.1** - React wrapper for ApexCharts

### Routing & State Management

- **React Router DOM 6.17.0** - Declarative routing for React
- **Context API** - Built-in state management with custom hooks

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```bash
sports-management-dashboard/
├── public/
│   ├── _headers                 # Netlify headers for MIME types
│   ├── _redirects              # SPA routing redirects
│   ├── css/
│   │   └── tailwind.css        # Tailwind CSS styles
│   └── img/                    # Static images and assets
├── src/
│   ├── components/             # Reusable UI components
│   ├── context/                # React Context for state management
│   │   └── index.jsx           # Material Tailwind controller
│   ├── data/                   # Static data and mock APIs
│   │   ├── authors-table-data.js    # Staff/players data
│   │   ├── projects-table-data.js   # Sports programs data
│   │   ├── statistics-cards-data.js # Dashboard metrics
│   │   └── statistics-charts-data.js # Chart configurations
│   ├── layouts/                # Page layout components
│   │   ├── auth.jsx            # Authentication layout
│   │   └── dashboard.jsx       # Main dashboard layout
│   ├── pages/                  # Page components
│   │   ├── auth/               # Authentication pages
│   │   │   ├── sign-in.jsx     # Login page
│   │   │   └── sign-up.jsx     # Registration page
│   │   └── dashboard/          # Dashboard pages
│   │       ├── home.jsx        # Dashboard home/overview
│   │       ├── profile.jsx     # Player profiles page
│   │       ├── tables.jsx      # Teams and programs tables
│   │       └── notifications.jsx # Matches and alerts
│   ├── routes.jsx              # Application routing configuration
│   ├── widgets/                # Complex UI components
│   │   ├── cards/              # Card components
│   │   │   ├── statistics-card.jsx    # Metric display cards
│   │   │   ├── profile-info-card.jsx  # Profile information
│   │   │   └── message-card.jsx       # Message/notifications
│   │   ├── charts/             # Chart components
│   │   │   └── statistics-chart.jsx   # ApexCharts wrapper
│   │   └── layout/             # Layout-specific widgets
│   │       ├── sidenav.jsx     # Sidebar navigation
│   │       ├── navbar.jsx      # Top navigation bar
│   │       ├── dashboard-navbar.jsx   # Dashboard-specific navbar
│   │       ├── footer.jsx      # Page footer
│   │       └── configurator.jsx       # Theme configurator
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # Application entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
├── postcss.config.cjs          # PostCSS configuration
├── netlify.toml                # Netlify deployment config
└── README.md                   # Project documentation
```

## 🏗️ Components Overview

### Core Components

#### **Statistics Cards**

- **Location**: `src/widgets/cards/statistics-card.jsx`
- **Purpose**: Display key metrics like active players, teams, matches, and revenue
- **Features**: Color-coded indicators, trend arrows, and responsive design

#### **Statistics Charts**

- **Location**: `src/widgets/charts/statistics-chart.jsx`
- **Purpose**: Render interactive charts using ApexCharts
- **Features**: Multiple chart types (bar, line), customizable themes, responsive

#### **Navigation Components**

- **Side Navigation**: `src/widgets/layout/sidenav.jsx`
  - Collapsible sidebar with sports-themed menu items
  - Dark/light theme support
- **Top Navigation**: `src/widgets/layout/dashboard-navbar.jsx`
  - User profile, notifications, and settings access

### Layout Components

#### **Dashboard Layout**

- **Location**: `src/layouts/dashboard.jsx`
- **Features**:
  - Responsive sidebar navigation
  - Theme configurator toggle
  - Fixed header with breadcrumbs
  - Footer with branding

#### **Authentication Layout**

- **Location**: `src/layouts/auth.jsx`
- **Features**:
  - Clean, minimal design for login/signup
  - Centered content layout
  - Background images and gradients

### Page Components

#### **Dashboard Home**

- **Location**: `src/pages/dashboard/home.jsx`
- **Features**:
  - Statistics overview cards
  - Interactive performance charts
  - Recent activities feed
  - Quick action buttons

#### **Players/Profile Management**

- **Location**: `src/pages/dashboard/profile.jsx`
- **Features**:
  - Player profile cards
  - Performance statistics
  - Contact information
  - Profile editing capabilities

#### **Teams & Programs**

- **Location**: `src/pages/dashboard/tables.jsx`
- **Features**:
  - Data tables for teams and programs
  - Sorting and filtering
  - Progress indicators
  - Action menus

#### **Matches & Notifications**

- **Location**: `src/pages/dashboard/notifications.jsx`
- **Features**:
  - Match schedules and results
  - Notification alerts
  - Calendar integration
  - Real-time updates

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ARyavatta/sportsMan.git
   cd sports-management-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Data Structure

### Statistics Cards Data

```javascript
// src/data/statistics-cards-data.js
export const statisticsCardsData = [
  {
    color: "gray",
    icon: UserGroupIcon,
    title: "Active Players",
    value: "1,247",
    footer: {
      color: "text-green-500",
      value: "+12%",
      label: "than last month",
    },
  },
  // ... more cards
];
```

### Chart Configurations

```javascript
// src/data/statistics-charts-data.js
const playerAttendanceChart = {
  type: "bar",
  height: 220,
  series: [{
    name: "Attendance",
    data: [85, 78, 92, 88, 95, 82, 90],
  }],
  options: {
    colors: "#388e3c",
    // ... chart options
  },
};
```

## 🎨 Customization

### Theme Configuration

The dashboard supports multiple themes and can be customized through the theme configurator (gear icon in the bottom right).

### Color Schemes

- **Primary**: Blue (#0288d1)
- **Secondary**: Green (#388e3c)
- **Accent**: Orange (#f39c12)

### Adding New Components

1. Create component in appropriate directory (`src/widgets/` or `src/components/`)
2. Export from index file
3. Import and use in pages/layouts

## 🌐 Deployment

### Netlify Deployment

The project includes `netlify.toml` configuration for seamless deployment:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[headers]]
  for = "/assets/*.js"
  [headers.values]
    Content-Type = "application/javascript"
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure headers for JavaScript MIME types

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Material Tailwind** - For the beautiful component library
- **Hero Icons** - For the comprehensive icon set
- **ApexCharts** - For powerful charting capabilities
- **Tailwind CSS** - For the utility-first CSS framework

## 📞 Support

For support, email support@sportsmanagement.com or join our Discord community.

---

**Made with ❤️ for sports organizations worldwide**

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
