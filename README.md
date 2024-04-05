[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Answer:

The best case input for the function would be an already sorted list. In this case, the number of permutations would only be one. If this the array is already sorted, the program would iterate through linearly so the best case runtime would be $\Theta (n)$.

The worst case input for the function would be a completely unsorted list, as in the array is sorted completely backwards. In this case, the number of permutations would be the highest. The worst case runtime would be $\Theta (n \cdot n!)$.

In the case of the permutations being randomly generated, we have no way of knowing the exact runtime. If there is no memory associated, the program would not know if the permutation was tried so the worst case runtime could potentially be infinite. The best case runtime would still be linear in the case of a perfectly sorted list, but the worst case runtime could possibly be infinite because of the unpredictability.
