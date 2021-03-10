function WelcomeFunc ({name, children}){
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>

    </div>

}

class Welcome extends React.Component {

    render (){
        return  <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>

    </div>
    }
}

class Clock extends React.Component{

   
    constructor(props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount(){
        this.timer = window.setInterval(this.tick.bind(this), 1000)

    }

    componnentwillUnmount (){
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render (){
        return <div>
           Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {

    constructor(props){
        super(props)
        this.state = {n: props.start, timer: null}
        this.toggle = this.toggle.bind(this)
        this.resetTimer = this.resetTimer.bind(this)

    }

    componentDidMount (){
        this.play()
    }

    componnentwillUnmount(){
        window.clearInterval(this.state.timer)
    }

    increment (){
        this.setState((state, props) => ({n: this.state.n + props.step}))
    }

    pause(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
          }) 
    }

    play (){
        window.clearInterval(this.state.timer)
        this.setState({
          timer: window.setInterval(this.increment.bind(this), 1000)
        }) 
    }

    toggle (){
        return this.state.timer ? this.pause() : this.play()
    }

    label() {
        return this.state.timer ? 'Pause' : 'Lecture'
    }

    resetTimer () {
        this.pause
        this.play
        this.setState((state, props) => ({n: props.start}))
    }
    
    render(){
            return <div>
                Valeur : {this.state.n}
                    <button onClick={this.toggle}>{this.label()}</button>
                    <button onClick={this.resetTimer}>Réinitialiser</button>
                    
            </div>
        }

}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

class ManualIncrementer extends React.Component{
    constructor(props){
        super(props)
        this.state = {n: 0}

    }
increment(e){
    e.preventDefault()
    this.setState((state, props) => ({n: this.state.n + 1}))
}

    render(){
        return <div>
            Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button>
        </div>
    }
}

function Home (){
    return <div>
        <Welcome name ="Dorothée" />
        <Welcome name ="Jean" />
        <Clock/>
        <ManualIncrementer start = {10}/>
        <Incrementer start = {0} />
    </div>

}

ReactDOM.render(<Home/>, document.querySelector('#app'))