# Button

The `Button` component is a reusable UI element for user interactions. It supports different visual variants and sizes, and accepts all standard HTML button props.

## Props

| Name        | Type                              | Default   | Description                                              |
| ----------- | --------------------------------- | --------- | -------------------------------------------------------- |
| `variant`   | `'primary', 'secondary'`          | `primary` | Visual style of the button                               |
| `size`      | `'sm', 'md', 'lg'`                | `md`      | Size of the button                                       |
| `children`  | `ReactNode`                       | —         | Content inside the button                                |
| `className` | `string`                          | —         | Additional CSS classes to apply to the button            |
| ...props    | `ComponentPropsWithRef<'button'>` | —         | All other standard button props (e.g. `onClick`, `type`) |

## Variants

- `primary`: Blue background, white text
- `secondary`: Gray background, white text

## Sizes

- `sm`: Small (`px-2 py-1 text-sm`)
- `md`: Medium (`px-4 py-2 text-md`)
- `lg`: Large (`px-6 py-3 text-lg`)

## Usage

```tsx
import Button from './Button'

<Button>Default Button</Button>

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button onClick={() => alert('Clicked!')}>With onClick</Button>
```

## Accessibility

- The button uses semantic `<button>` HTML.
- You can pass `aria-*` attributes and other accessibility props as needed.

## Customization

- Extend or override styles using Tailwind CSS utility classes or by passing `className`.
