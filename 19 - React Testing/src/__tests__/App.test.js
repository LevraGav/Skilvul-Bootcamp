import { AddTodo } from "../components/helper";

test("Should add todo to the list", () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  const addTodo = {
    id: 3,
    name: "newTodo",
    isComplete: false,
  };

  const concat = [addTodo, ...defaultTodo]
  const expected = JSON.stringify(concat)

  // Act
  const newTodo = AddTodo(defaultTodo, addTodo);
  const result = JSON.stringify(newTodo)

  // Assert
  expect(result).toBe(expected);
});

test("should not mutate the existing todo array", () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  const addTodo = {
    id: 3,
    name: "newTodo",
    isComplete: false,
  };

  const notExpected = JSON.stringify(addTodo)

  // Act
  const newTodo = AddTodo(defaultTodo, addTodo);
  const result = JSON.stringify(newTodo)

  // Assert
  expect(result).not.toBe(notExpected);
});
