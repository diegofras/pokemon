import React, { Component } from "react";
import "../css/Naslovnacss.css";

export class KontClassComp extends Component {
    state = {
        ime: "",
        prezime: "",
        email: "",
        poruka: "",

    }
    // onSubmit = e => { e.preventDefault(); alert("Hvala vam ",this.state.ime," ", this.state.prezime," , na vašoj poruci, tražit ćemo email: ", this.state.email, this.state.poruka); }
    onSubmit = e => { 
        e.preventDefault(); 
        alert(`Hvala vam ${this.state.ime} ${this.state.prezime}, na vašoj poruci, tražit ćemo email: ${this.state.email}. Poruka: ${this.state.poruka}`); 
    }
    
    render() {
        return (
            <div className="Kontakt">
                <h2> Kontakt</h2>

                <form onSubmit>
                    <div id="kon1">
                        <div>
                            <h3>Ime</h3>
                            <input id="form1" placeholder="Vaše ime" value={this.state.ime} onChange={e => this.setState({ ime: e.target.value })} />
                        </div>
                        <div>
                            <h3>Prezime</h3>
                            <input id="form2" placeholder="Vaše prezime" value={this.state.prezime} onChange={e => this.setState({ prezime: e.target.value })} />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <input id="form3" type="email"placeholder="Vaša e-pošta" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                        </div>
                    </div>
                    <div id="kon2">
                        <h3>Poruka</h3>
                        <textarea placeholder="Vaša poruka" value={this.state.poruka} onChange={e => this.setState({ poruka: e.target.value })} />
                    </div>

                    <button onClick={e => this.onSubmit(e)}><p>Pošalji upit</p></button>
                </form>
            </div>
        )
    }
}

export default KontClassComp;