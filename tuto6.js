function Field({name, value, onChange, children}){
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} name={name} id={name} className="form-control"/>
    </div>
    
}

function Checkbox({name, value, onChange, children}){
    return <div className="form-check">
    <input type="checkbox" checked={value} onChange={onChange} name={name} id={name} className="form-check-input"/>
    <label htmlFor={name} className="form-check-label">{children}</label>
</div>
}

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            lastname: '',
            firstname: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(e){
        const name = e.target.name;
        const type = e.target.type;
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        
        this.setState({
            [name]: value
        })

    }

    handleSubmit(e){
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            lastname: '',
            firstname: '',
            newsletter: false
        })
    }

    render(){
        return <form className="container" onSubmit={this.handleSubmit}>

            <Field name="lastname" value={this.state.lastname} onChange={this.handleChange}>Nom</Field>
            <Field name="firstname" value={this.state.firstname} onChange={this.handleChange}>Prénom</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter </Checkbox>
            <div className="form-group">
                <button className="btn btn-primary">Envoyer</button>
            </div>
            {JSON.stringify(this.state)}
            {/** 
        ---to create field controlled by react 
            <div>
                <label htmlFor="lastname">Nom</label>
                <input type="text" id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" id="firstname" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="newsletter">S'abonner à la newsletter ?</label>
                <input type="checkbox" id="newsletter" name="newsletter" checked={this.state.newsletter} onChange={this.handleChange}/>
            </div>
            ---to create field non controlled by react
            <input type="text" defaultValue = ""/>
            {JSON.stringify(this.state)}
        */}

        </form>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))