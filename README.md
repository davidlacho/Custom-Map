# TypeScript Mapping Application

## Overview

This project is a TypeScript-based mapping application designed to demonstrate core concepts of TypeScript, focusing on restricting API surface area, utilizing interfaces, and enforcing type safety. The application allows the creation of users, companies, and custom maps, showcasing the power of TypeScript in managing complex data structures and their interactions.

## Key Concepts

### Restricting API Surface Area

The application is designed to limit the interactions other engineers can have with it. By exposing a minimal API surface, it ensures that engineers can only perform actions explicitly allowed. This is achieved by structuring the project so that only certain methods and properties are accessible, thereby preventing unauthorized manipulations and enhancing security.

### Private Modifiers and Encapsulation

To protect the application's core functionality and data, private modifiers are used extensively. This restricts access to the Google Maps instance, preventing external modifications and maintaining the integrity of the application's data. It embodies the principle of encapsulation, ensuring that internal mechanisms are hidden from external access.

### Interfaces and Type Safety

A significant portion of the project revolves around the use of interfaces to define contracts for the classes. This approach solves the problem of duplicating code and sets a standard for how objects interact with the custom map. By defining an interface, the application inverts dependency, requiring that objects conform to the map's requirements rather than the map accommodating various object types. This promotes type safety and reduces the likelihood of bugs.

## Features

- Creation of user and company instances with specific properties.
- Integration with Google Maps to display locations and information.
- Use of custom maps for adding markers with restricted access to the underlying map instance.
- Implementation of interfaces to ensure that objects meet the required structure for interaction with the map.

## Implementation Details

- **Encapsulation:** Utilizing private modifiers to restrict access to the Google Maps instance, ensuring that it can only be manipulated through the methods provided by the custom map class.
- **Interfaces:** Defining a `Mappable` interface that specifies the structure objects must adhere to for being added as markers on the map. This includes properties like `location`, and `markerContent`.
- **Type Safety:** Leveraging TypeScript's type system to enforce strict type checks, ensuring that only objects conforming to the specified interfaces can interact with certain parts of the application.
- **Code Reusability:** Through interfaces, the application minimizes coupling between classes, enabling a higher degree of code reusability and making the codebase more manageable.
