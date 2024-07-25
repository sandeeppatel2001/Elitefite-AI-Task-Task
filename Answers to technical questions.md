

# Answers to Technical Questions

## Question 1: How long did you spend on the coding test?
I spent approximately 5 hours completing this task. My focus was on adding functionality rather than creating a complex UI.
Following is approx break of time taken.
***
Layout Preparing: 40 min,
UI Coding: 2 hours,
Functionality: 3 hours,
Markup file: 1 hour
***

## Question 2: What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
In React 18, they have introduced useTransition hooks that help us update the search field faster, but update the filtered task list later



```
const [isPending, startTransition] = useTransition();
const handleSearchChange = (e) => {
    setSearch(e.target.value.trim());
    startTransition(() => {
      setFilteredList((prevFilteredList) => {
        // Filtering the list based on search, for filtering please see code in Tab.js
      });
    });
  };
  ```
  If the result is still pending then rending the circular progress bar for feedback.

  ```
  {isPending ? (
        <Center>
          <CircularProgress isIndeterminate />
        </Center>
      ) : (
        <RenderList/>
      )
}
```
## Question 3:- How would you track down a performance issue in production? Have you ever had to do this? 

Ans:
I am familiar with several methods that can be used:
1. Monitoring and Logging: Implement comprehensive monitoring and logging to identify performance bottlenecks and understand application behavior.
2. Performance Profiling: Use performance profiling tools such as Chrome DevTools, React Profiler, or Lighthouse to analyze the performance of the application and pinpoint slow areas.
3. A/B Testing: Implement A/B testing to compare different versions of the application and identify performance improvements.
4. Database Optimization: Examine and optimize database queries to ensure efficient data retrieval.
5. Collaboration: Work closely with team members, including backend developers, database administrators, and DevOps engineers, to identify and resolve performance issues.
6. Implementation of docker container and run multiple docker container.
7. Implementation of Nginx loadbalancing .

## Question 4: If you had more time, what additional features or improvements would you consider adding to the task management application?

Answer: 
1. State Management: Implement Redux for more efficient state management, especially for handling complex state changes and improving code maintainability.
2. Database Integration: Integrate a database such as MongoDB or Firebase to persist data and enable multi-device synchronization.
3. Enhanced UI/UX: Improve the UI to make it more user-friendly and visually appealing. This could involve adding more interactive elements, animations, and a modern design.
4. Advanced Features: Add advanced features such as task categorization, due date reminders, and collaboration tools to make the application more robust and useful.
5. Testing: Implement comprehensive unit and integration tests to ensure the application is reliable and bug-free.
