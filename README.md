# Cosmic Fishing

A modern web-based fishing game built with Next.js, featuring real-time leaderboards and an in-game market system.

## 🚀 Features

- 🌌 Space-themed fishing game
- 📊 Real-time leaderboard system
- 🛍️ In-game market with dynamic items
- 📱 Progressive Web App (PWA) support
- 🌐 Offline-first functionality
- 🎮 Responsive design for all devices

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**:
  - Tailwind CSS
  - Custom CSS animations
- **State Management**: React Context API
- **Offline Support**:
  - Service Workers
  - LocalStorage caching
- **API Integration**: Custom API endpoints
- **UI Components**: Custom-built components
- **Animations**: CSS and SVG animations

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Taim-Gr/cosmic-fish.git
```

2. Install dependencies:

```bash
cd cosmic-fish
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🌟 Key Features Implementation

### Offline Support

- Service worker implementation for offline functionality
- LocalStorage caching for market and leaderboard data
- Fallback UI components for offline scenarios

### Real-time Updates

- 60-second revalidation for leaderboard data
- 5-minute revalidation for market data
- Background data synchronization

### PWA Features

- Installable on mobile devices
- Offline functionality
- Push notifications support
- Custom icons for different platforms

## 📱 Platform Support

- Web browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS, Android)
- Desktop (Windows, macOS, Linux)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:
learn more about this in the officall nex pwa documentition page : <a>https://nextjs.org/docs/app/guides/progressive-web-apps</a>
```
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 📄 Project Structure

```
cosmic-fish/
├── public/              # Static assets
│   ├── images/         # Game assets
│   │   ├── fonts/          # Custom fonts
│   │   └── icons/          # PWA icons
│   ├── src/
│   │   ├── app/            # Next.js app router
│   │   │   ├── market/     # Market page
│   │   │   └── leaderboard/# Leaderboard page
│   │   ├── components/     # React components
│   │   └── lib/            # Utility functions
│   └── ...
```

## �� Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 👨‍💻 Author

- Taim-Gr
- GitHub: [@Taim-Gr](https://github.com/Taim-Gr)
