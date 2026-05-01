# React Native Clean Architecture Template

Production-ready React Native application demonstrating scalable architecture and real-world implementation using Clean Architecture principles.

---

## Overview

This project serves as a reference architecture for building maintainable and scalable React Native applications. It enforces a clear separation of concerns across layers and promotes a modular, testable codebase.

---

## Features

* Clean Architecture
* Modular feature-based structure
* State management using Zustand
* Repository pattern for data handling
* Structured API integration
* Reusable and scalable UI components

---

## Architecture

* Clean Architecture
* Repository Pattern
* Feature-Based Modular Design

---

## Tech Stack

* React Native (Bare Workflow)
* TypeScript
* Zustand (State Management)
* Axios (Networking)
* React Navigation

---

## Project Structure

```id="rn-structure-modern"
src/

├── core/           # Shared utilities, network, theme, components
├── domain/         # Business models and repository interfaces
├── data/           # Models, providers, repository implementations
├── modules/        # Feature-based modules (views + viewmodels)
└── routes/         # Navigation configuration
```

---

## Layer Overview

* **Core**: Shared utilities, network configuration, and reusable components
* **Domain**: Business logic and repository contracts
* **Data**: Handles API communication and data transformation
* **Modules**: Feature-based UI and state management
* **Routes**: Navigation setup and configuration

---

## Data Flow

```id="rn-flow-modern"
View → ViewModel → Repository → Provider → API
```

Response handling:

```id="rn-response-flow"
API → Model → Repository → Entity → ViewModel → View
```

---

## Use Cases

* Scalable mobile applications
* Startup MVPs
* Production systems requiring clean architecture
* Projects needing modular and maintainable structure

---

## Getting Started

### Prerequisites

* Node.js (>= 18)
* Yarn or npm
* CocoaPods (for iOS)

---

### Installation

```bash id="rn-install"
yarn install
```

For iOS:

```bash id="rn-pods"
cd ios && pod install && cd ..
```

---

### Run the Application

* Android:

```bash id="rn-android"
yarn android
```

* iOS:

```bash id="rn-ios"
yarn ios
```

---

## Purpose

This template provides a strong foundation for:

* Clean and maintainable codebases
* Scalable architecture
* Consistent project structure
* Faster development setup

---

## Contributing

Contributions are welcome. You can fork the repository and submit a pull request.

---

## License

This project is licensed under the Apache-2.0 License.

