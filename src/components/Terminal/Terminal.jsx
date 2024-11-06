import React, { useState } from 'react';
import './Terminal.css';

const Terminal = () => {
    const [command, setCommand] = useState("");

    const handleCommandChange = (e) => {
        setCommand(e.target.value);
    };

    const handleCommandSubmit = (e) => {
        if (e.key === 'Enter') {
            // Aquí puedes manejar el comando ingresado, por ejemplo, agregarlo a una lista de comandos ejecutados
            console.log("Command entered:", command);
            setCommand(""); // Limpiar el input después de presionar Enter
        }
    };

    return (
        <div className="terminal">
            {/* Barra de título */}
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="button red"></span>
                    <span className="button yellow"></span>
                    <span className="button green"></span>
                </div>
                <p className="terminal-title">Terminal</p>
            </div>

            {/* Área de comandos */}
            <div className="terminal-body">
                <div className="terminal-command">
                    <span className="prompt">$</span>
                    <input
                        type="text"
                        className="input"
                        value={command}
                        onChange={handleCommandChange}
                        onKeyDown={handleCommandSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
