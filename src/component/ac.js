
import React, { Component } from 'react'
import ac from '../styles/components/ac/ac.css'

export class Index extends Component {
    vd;

    constructor(props) {
        super(props);
        this.state ={
            temperature: 24,
            isOn : false,
            acName: "Ned Stack A.C"
        }
    }

    increaseTemperature(){
        if(this.state.isOn && this.getTemperature() <30) {
            this.setState({
                temperature: this.getTemperature()+ 1
            })
        }


    }
    getTemperature(){
        return this.state.temperature
    }

    decreaseTemperature(){
        if(this.state.isOn && this.getTemperature() > 16) {
            this.setState({
                temperature: this.state.temperature - 1
            })
        }
    }
    acIsOn(){
        return this.state.isOn
    }
    switch(){

      if (this.acIsOn()) {
          this.off()
      }else this.on()
    }
    on(){
        this.setState({
            isOn: this.state.isOn = true
        })
    }
    off(){
        this.setState({
            isOn: this.state.isOn = false,
            temperature: this.state.temperature = 24
        })
    }
    displaySwitchState(){
        if (this.state.isOn) return <p className={"switchDisplayOn"}>On</p>
        else return <p className={"switchDisplayOff"}>Off</p>
    }
    temperatureDisplay(){
        if (this.acIsOn()) {
            this.ventDisplay()
            return <p className={"currentTemperature"}> Current Temperature  {this.state.temperature}</p>
        }
        else return <p> </p>
    }
    ventDisplay(){
        let vent
        if(this.acIsOn())
           vent =  document.querySelector(".ventDisplayDiv")
        // let vent = this.vd.value()
           vent = <div className={"vent"}> </div>
    }
    acBoxTemperatureDisplay(){
        if(this.acIsOn()){
          return  this.getTemperature()
        }
        else return " "
    }
    render() {
        return (
            <div className={"body"}>
                <div>
                    <h1 className="ned">Ned Stack A.C</h1>
                </div>
                <div className={"acMainContainer"}>
                    <div className={"acName"}>
                        <p className={"acBoxName"} >{this.state.acName}</p>
                        <p>{this.acBoxTemperatureDisplay()}</p>
                    </div>
                    <div onClick={()=> this.ventDisplay()} id={"vd"} value={"vent"} className={"ventDisplayDiv"}>

                        const [vent setVent] = use
                    </div>
                </div>

                <div className={"remote"}>
                <div className={"displayScreen"}>
                <p>{this.temperatureDisplay()}</p>
                  <p>  {this.displaySwitchState()}</p>
                </div>
                <div className={"powerSwitch"}>
                    <button onClick={()=> this.switch()} className={"switch"}> Switch</button>
                </div>
                <div className={"increaseDecreaseButtonDiv"}>
                    <button onClick={()=>this.increaseTemperature()}
                            className={"increaseDecrease"}>Increase Temperature</button><br/>
                    <button onClick={()=>this.decreaseTemperature()}
                            className={"increaseDecrease"}>Decrease Temperature</button>
                </div>

                    <div className={"buttonPad"}>
                        <div className={"one_nine"}>
                            <button> 1 </button>
                            <button> 2 </button>
                            <button> 3 </button>
                        </div>
                        <div className={"one_nine"}>
                            <button> 4 </button>
                            <button> 5 </button>
                            <button> 6 </button>
                        </div>
                        <div className={"one_nine"}>
                            <button> 7 </button>
                            <button> 8 </button>
                            <button> 9 </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default Index