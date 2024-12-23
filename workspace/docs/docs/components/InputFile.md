# InputFile

File upload component with drag and drop functionality.

## Props

| Prop            | Type    | Default           | Description                                                                 |
|-----------------|---------|-------------------|-----------------------------------------------------------------------------|
| `label`         | String  | `''`              | The label for the input file component.                                     |
| `accept`        | String  | `''`              | The file types that the server accepts (e.g., `.jpg,.png`).                 |
| `multiple`      | Boolean | `false`           | Whether multiple files can be selected.                                     |
| `variant`       | String  | `'default'`       | The variant style of the input file component. Options: `default`, `dropzone`. |
| `size`          | String  | `'md'`            | The size of the input file component. Options: `sm`, `md`, `lg`.            |
| `containerClass`| String  | `'max-w-md mx-auto'` | The custom class for the container.                                          |
| `icon`          | String  | `'cloud'`         | The icon to be displayed.                                                   |
| `text`          | String  | `''`              | The custom text to be displayed.                                            |
| `labelIcon`     | String  | `''`              | The icon to be displayed in the label.                                      |

## Usage

### Basic File Upload

<InputFile   />
<InputFile variant="dropzone" label="Dropzone Style" />