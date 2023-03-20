import {Component} from 'react'

import {
  Heading,
  Container,
  Label,
  SelectElement,
  OptionElement,
  ContainerImage,
  TopText,
  BottomText,
  ButtonElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    displayMeme: false,
    ImageUrl: '',
    topText: '',
    bottomText: '',
    eachSelect: '',
  }

  onClickSubmit = event => {
    event.preventDefault()
    this.setState(prevState => ({displayMeme: !prevState.displayMeme}))
  }

  onChangeUrl = event => {
    this.setState({ImageUrl: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({eachSelect: event.target.value})
  }

  renderDisplay = () => {
    const {ImageUrl, topText, bottomText, eachSelect} = this.state
    return (
      <ContainerImage bgColor={ImageUrl}>
        <TopText fontSize={eachSelect}>{topText}</TopText>
        <BottomText fontSize={eachSelect}>{bottomText}</BottomText>
      </ContainerImage>
    )
  }

  render() {
    const {displayMeme, eachSelect} = this.state
    return (
      <Container data-testid="meme">
        <form onSubmit={this.onClickSubmit}>
          <Heading>Meme Generator</Heading>
          <div>
            <Label htmlFor="urlText">Image URl</Label>
            <input
              type="text"
              onChange={this.onChangeUrl}
              id="urlText"
              data-testid="meme"
            />
          </div>
          <div>
            <Label htmlFor="topText">Top Text</Label>
            <input type="text" onChange={this.onChangeTop} id="topText" />
          </div>
          <div>
            <Label htmlFor="bottomText">Bottom Text</Label>
            <input type="text" onChange={this.onChangeBottom} id="bottomText" />
          </div>
          <div>
            <Label htmlFor="FontSize">Font Size</Label>
            <SelectElement
              id="FontSize"
              value={eachSelect}
              onChange={this.onChangeSelect}
            >
              {fontSizesOptionsList.map(eachObject => (
                <OptionElement key={eachObject.optionId} value={eachSelect}>
                  {eachObject.displayText}
                </OptionElement>
              ))}
            </SelectElement>
          </div>
          <ButtonElement type="submit" data-testid="meme">
            Generate
          </ButtonElement>
        </form>
        {displayMeme && this.renderDisplay()}
      </Container>
    )
  }
}

export default MemeGenerator
