const placeholdertext = `# Type into the box above
I did a thing!
Here's how _styled_ **text** looks in here. ~~I'm so clever~~
## Other things to try
Make a [hyperlink](https://www.freecodecamp.org) if you want.
> This is a line of quote.

Formatting makes inline code like this \`<title></title>\` stand out.
What else... make more code
\`\`\`
// I'm hungry
function fetchCheese(refrigerator) {
  if (refrigerator == "open") {
    return cheese;
  }
}
\`\`\`
- here is a
- list of
- words
- and words

![kitty](https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg)
FreeCodeCampKitty says hello~`

marked.setOptions({
  breaks: true
})
const renderer = new marked.Renderer();

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholdertext
    };
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  this.setState({
   input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
        <Prevbox input={this.state.input} />
      </div>
    );
  }
};

const Prevbox = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.input, {renderer: renderer})
      }}
      id="preview"
    />
  );
};

ReactDOM.render(<Previewer />, document.getElementById("previewer"));