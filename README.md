# React Native FlatList KeyExtractor Bug

This repository demonstrates a common bug in React Native's FlatList component: incorrect usage of the `keyExtractor` prop.  The `keyExtractor` prop is crucial for efficient rendering and updating of list items.  Incorrect usage can lead to performance issues, incorrect item rendering, and unexpected behavior.

## Bug Description

The bug is caused by either a missing `keyExtractor` or a `keyExtractor` that doesn't generate unique keys for each item in the data array. When the data changes, FlatList will not be able to efficiently update the list, potentially leading to items being rendered incorrectly, or the entire list being re-rendered unnecessarily, impacting performance.

## Bug Reproduction

The `bug.js` file demonstrates the buggy code.  Run the app and observe the erratic behavior as the data is updated.

## Solution

The `bugSolution.js` file provides a corrected version with a properly implemented `keyExtractor`. The `keyExtractor` function should consistently return a unique ID for each item.  This allows FlatList to efficiently update the list. 

## How to run

1. Clone this repository.
2. `npm install`
3. `npx react-native run-android` or `npx react-native run-ios`
