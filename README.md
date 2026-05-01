# React Native Clean Architecture

A professional React Native boilerplate implementing **Clean Architecture** principles. This project is designed for scalability, testability, and a clear separation of concerns.

## 🏗️ Architecture Overview

The project is organized into four main layers:

### 1. **Domain Layer** (`src/domain`)
The core of the application, containing business logic and rules.
- **Entities**: Simple data objects agnostic of any external framework.
- **Repositories**: Abstract interfaces defining data operations.
- **UseCases**: (Optional) Specific business logic units.

### 2. **Data Layer** (`src/data`)
Responsible for data retrieval and persistence.
- **Models**: Data objects with serialization/deserialization logic (JSON mapping).
- **Providers**: Raw data sources (API clients, local storage).
- **Repository Implementations**: Concrete implementations of domain repositories.

### 3. **Presentation Layer** (`src/modules`)
The UI layer organized by feature modules.
- **Views**: React components and screens.
- **ViewModels**: State and logic management using **Zustand**.

### 4. **Core Layer** (`src/core`)
Cross-cutting concerns and shared utilities.
- **Network**: Configured Axios instance.
- **Theme**: Centralized color and typography management.
- **Widgets**: Reusable UI components.

---

## 🛠️ Technology Stack

- **Framework**: React Native (Bare Workflow)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Networking**: [Axios](https://github.com/axios/axios)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **Icons**: [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native)
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 18)
- Yarn or npm
- CocoaPods (for iOS)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Install iOS pods:
   ```sh
   cd ios && pod install && cd ..
   ```

### Running the App
- **Android**: `yarn android`
- **iOS**: `yarn ios`

## 📂 Project Structure
```text
src/
├── core/           # Theme, Network, Widgets, Constants
├── domain/         # Entities, Repository Interfaces
├── data/           # Models, Repository Impls, Providers
├── modules/        # Feature modules (Auth, Home)
│   ├── views/      # Screens
│   └── viewmodels/ # State stores
└── routes/         # Navigation configuration
```
