
import React, { Component } from 'react'
import ac from '../styles/components/ac/ac.css'

let oneButton = document.querySelector("#one")
let twoButton = document.querySelector("#two")
let threeButton = document.querySelector("#three")

let fourButton = document.querySelector("#four")
let fiveButton = document.querySelector("#five")
let sixButton = document.querySelector("#six")

let sevenButton = document.querySelector("#seven")
let eightButton = document.querySelector("#eight")
let nineButton = document.querySelector("#nine")

//onclick



export class Index extends Component {
    vd;

    constructor(props) {
        super(props);
        this.state ={
            temperature: 24,
            isOn : false,
            acName: "Ned Stack A.C",
            temperatureButtonClickCount: 0,
            clickedNumberButton : 0
        }
    }
    oneButtonFunction(){
    }
    twoButtonFunction(){
       return 2
    }
    threeButtonFunction(){
        return 3
    }
    fourButtonFunction(){
        return 4
    }
    fiveButtonFunction(){
        return 5
    }
    sixButtonFunction(){
        return 6
    }
    sevenButtonFunction(){
        return 7
    }
    eightButtonFunction(){
        return 8
    }
    nineButtonFunction(){
        return 9
    }
    increaseTemperature(){
        if(this.state.isOn && this.getTemperature() <30) {
            this.setState({
                temperature: this.getTemperature()+ 1
            })
        }


    }
    getTemperatureButtonClickCount(){
        return this.state.temperatureButtonClickCount
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
            return <div>
                        <p className={"currentTemperature"}> Current Temperature </p>
                        <h3  className={"displayTemperature"}> {this.state.temperature}</h3>
                    </div>
        }
        else return <p> </p>
    }
    ventDisplay(){
        // let vent
        // if(this.acIsOn())
        //    vent =  document.querySelector(".ventDisplayDiv")
        // let vent = this.vd.value()
        //    vent = <div className={"vent"}> </div>
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
                            {/*<button id={"one"} onClick={this.oneButtonFunction()}> 1 </button>*/}
                            {/*<button id={"two"} onClick={this.twoButtonFunction()}> 2 </button>*/}
                            <button id={"three"}> 3 </button>
                        </div>
                        <div className={"one_nine"}>
                            <button id={'four'}> 4 </button>
                            <button id={"five"}> 5 </button>
                            <button id={"six"}> 6 </button>
                        </div>
                        <div className={"one_nine"}>
                            <button id={"seven"}> 7 </button>
                            <button id={"eight"}> 8 </button>
                            <button id={"nine"}> 9 </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default Index