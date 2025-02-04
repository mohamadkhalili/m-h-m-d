# Expansion Panel

## Default Expansion Panel

**Props:**

- `title`: The title of the expansion panel, displayed at the top.
- `text`: The content text that appears when the panel is expanded.

**Usage:**

- Use the `ExpansionPanel` component to create collapsible sections with smooth transitions.
- Customize the appearance and behavior using props or slots.

<CodeTabs
  templateCode="
<ExpansionPanel :title='title' :text='text' />
"
scriptCode="
export default {
data() {
    return {
      title : 'Expandable Title',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, ex a interdum consequat, risus libero aliquet justo, at facilisis purus justo ac erat. Donec euismod nisi nec velit hendrerit, nec varius purus pharetra. Fusce sit amet quam vel nisi vestibulum tincidunt. Suspendisse potenti.',
    }
  }
}
"
/>

## Custom Class Expansion Panel

**Props:**

- `activeTitleClass`: Classes applied to the title when the panel is active.
- `onActiveTitleClass`: Classes applied to the title when the panel is inactive.
- `activeTextClass`: Classes applied to the text/content when the panel is active.
- `onActiveTextClass`: Classes applied to the text/content when the panel is inactive.

**Usage:**

- Customize the title and text using the provided active and onactive class props.

<CodeTabs
  templateCode="
<div class='ml-16'>
<ExpansionPanel :title='title' :text='text' activeTitleClass='bg-indigo-700 text-white hover:bg-indigo-600 rounded-lg w-[500px]' onActiveTitleClass='bg-blue-900 hover:bg-indigo-700 text-white w-[500px] rounded-t-lg' activeTextClass='bg-indigo-200 w-[500px] rounded-b-lg' onActiveTextClass='bg-indigo-200 w-[500px] rounded-b-lg' />
</div>
"
scriptCode="
export default {
data() {
    return {
      title : 'Expandable Title',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, ex a interdum consequat, risus libero aliquet justo, at facilisis purus justo ac erat. Donec euismod nisi nec velit hendrerit, nec varius purus pharetra. Fusce sit amet quam vel nisi vestibulum tincidunt. Suspendisse potenti.',
    }
  }
}
"
/>
