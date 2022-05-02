import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export function Widget() {

    /**
     * Definindo estado e setEstado para o widget - default fechado.
     */
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    /**
     * Função que alterna entre os valores de estado true e false;
     */
    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen);
    }

    return(
        <div className='absolute  bottom-5 right-5'>
            {
                //para testar o funcionamento do estado.
                isWidgetOpen ? <p>Hello World</p> : null 
            }

            <button onClick={toggleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className="w-6 h-6" />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </button>
        </div>
    );
}