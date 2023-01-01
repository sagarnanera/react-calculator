import React from 'react'
import Key from './Key'
import { Grid } from '@mui/material';

const Keypad = (props) => {


    const { expresion, setExpresion, setAnswer } = props;

    const handleClick = (e) => {
        // const target = e.target.id;
        // // console.log(target);
        // console.log('expr', expresion.concat(...expresion, target));
        // setExpresion(expresion.concat(...expresion, target))

        const value = e.target.id;
        // console.log('clicked');
        // console.log(value);

        switch (value) {

            case 'equal': {

                // if it's an equal sign, use the eval module
                // to evaluate the question ,convert the answer
                // (in number) to String
                if (expresion !== '') {
                    var ans = '';
                    try {
                        ans = eval(expresion);
                        console.log(ans);
                    }
                    catch (err) {
                        setAnswer("ERROR : Math Error");
                    }
                    if (ans === undefined)
                        setAnswer("ERROR : Math Error");

                    // update answer in our state.
                    else {
                        setAnswer(ans);
                        setExpresion(ans);
                    }
                    // break;
                } else {
                    setAnswer('ERROR : provide expresion');
                }
                break;
            }
            case 'clear': {

                // if it's the Clears sign, just clean our
                // question and answer in the state
                setAnswer('');
                setExpresion('');
                break;
            }

            case 'back': {
                var str = expresion;
                str = str.substr(0, str.length - 1);
                setExpresion(str);
                break;
            }

            case 'plus-minus': {

                break;

            }

            default: {

                // for every other command, update the answer in the state
                const newex = expresion + value;
                setExpresion(newex)
                break;
            }
        }
    }

    return (
        <div className='keypad'>

            <Grid container spacing={0}>
                <Grid item xs={6} onClick={handleClick}>
                    <Key symbol='C' id="clear" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol='&#8592;' id="back" />
                </Grid>
                {/* <Grid item xs={3} onClick={handleClick}>
                    <Key symbol='&#177;' id="plus-minus" />
                </Grid> */}
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol='&#8725;' id="/" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={7} id="7" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={8} id="8" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={9} id="9" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol='&#215;' id="*" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={4} id="4" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={5} id="5" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={6} id="6" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol='&#8722;' id="-" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={1} id="1" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={2} id="2" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={3} id="3" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol='&#43;' id="+" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol={0} id="0" />
                </Grid>
                <Grid item xs={3} onClick={handleClick}>
                    <Key symbol='.' id="." />
                </Grid>
                <Grid item xs={6} onClick={handleClick}>
                    <Key symbol='&#61;' id="equal" />
                </Grid>
            </Grid>


        </div>
    )
}

export default Keypad
