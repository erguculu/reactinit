const scaleNames = {
    c: 'celcius',
    f: 'fahrenheit'
}

/**
 * T(°F) = T(°C) × 9/5 + 32
 * T(°C) = (T(°F) - 32) × 5/9
 */
function toCelcius (fahrenheit){

    return (fahrenheit - 32) * 5/9
}

function toFahrenheit(celcius){

    return (celcius *9/5) + 32
}

function BoilingVerdict({celcius}){
    if(celcius>=100){
        return <div className="alert alert-success">L'eau bout</div>
    }
    return <div className="alert alert-info">L'eau ne bout pas</div>

}

function tryConvert(temperature, convert){
    const value = parseFloat(temperature)
    if(Number.isNaN(value)){
        return '';
    }
    return (Math.round(convert(value)*100) /100).toString()

}

class TemperatureInput extends React.Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
       this.props.onTemperatueChange(e.target.value)
    }

    render (){
        const {temperature} = this.props
        const name = 'scale' + this.props.scale
        const scaleName = scaleNames[this.props.scale]
        return <div>
        <div className="form-group">
            <label htmlFor={name}>Température (en {scaleName})</label>
            <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange}/>
        </div>
    </div>
    }
}

class Calculator extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            scale:'c',
            temperature: 20
        }
        this.handleCelciusChange =this.handleCelciusChange.bind(this)
        this.handleFahrenheitChange =this.handleFahrenheitChange.bind(this)
    }

    handleCelciusChange(temperature){
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange(temperature){
        this.setState({
            scale: 'f',
            temperature
        })
    }

    

    render(){
        const {temperature, scale} = this.state
        const celcius = scale === 'c' ? temperature : tryConvert(temperature,toCelcius)
        const fahrenheit = scale === 'f' ?temperature : tryConvert(temperature, toFahrenheit)
        return <div>
            <TemperatureInput scale="c" temperature ={celcius} onTemperatueChange ={this.handleCelciusChange}/>
            <TemperatureInput scale="f" temperature ={fahrenheit} onTemperatueChange ={this.handleFahrenheitChange}/>
            <BoilingVerdict celcius={parseFloat(celcius)}/>
        </div>
    }
}

ReactDOM.render(<Calculator/>, document.querySelector('#app') )