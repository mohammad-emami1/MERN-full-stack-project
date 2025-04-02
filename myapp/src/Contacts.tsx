// Contacts.tsx
import React from "react";
import CardGrid from "./CardGrid";

const markdownContent = `
# Understanding Quadratic Equations

A quadratic equation can be expressed in the standard form:

$$
ax^2 + bx + c = 0
$$

The solutions for this equation are given by the quadratic formula:

$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

## Python Code Example

Here is how you can solve a quadratic equation using Python:

\`\`\`python
import cmath

def solve_quadratic(a, b, c):
    # calculate the discriminant
    d = (b**2) - (4*a*c)
    # find two solutions
    sol1 = (-b - cmath.sqrt(d)) / (2 * a)
    sol2 = (-b + cmath.sqrt(d)) / (2 * a)
    return sol1, sol2

# Example usage
a, b, c = 1, 5, 6
print(solve_quadratic(a, b, c))
\`\`\`

## Conclusion

By understanding the quadratic formula and how to implement it in Python, you can solve any quadratic equation efficiently!
`;

function Contacts() {
  const cardData = [
    {
      
      color: '#3498db',
      title: 'Understanding Quadratic Equations',
      content: markdownContent, // Using the defined markdownContent
      titlePosition: 'center',
    },
    {
      
      color: '#e74c3c',
      title: 'Statistical Insights',
      content: `
        
      `,
      titlePosition: 'left',
    },{
      
      color: '#e74c3c',
      title: 'Statistical Insights',
      content: `
        
      `,
      titlePosition: 'left',
    },
    {
      color: '#2ecc71',
      title: 'Calculus Concepts',
      content: `
        The derivative of a function can be defined as:
        $$
        f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}
        $$

        In Python, you might use:
        \`\`\`python
        def derivative(f, x, h=1e-5):
            return (f(x + h) - f(x)) / h
        \`\`\`
      `,
      titlePosition: 'right',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
    <CardGrid cards={cardData} />
    </div>
  );
}

export default Contacts;
