import { BubbleChat } from 'flowise-embed-react'

const Chat = () => {
    return (
        <BubbleChat
            chatflowid="36c426b1-e0d9-4411-bc68-b856622be321"
            apiHost="https://siemmens-tf.onrender.com"
            theme={{
                button: {
                    backgroundColor: "#0098A6",
                    right: 20,
                    bottom: 20,
                    size: "large",
                    iconColor: "white",
                    customIconSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWkscMERkq3kFVILkZS89EmcQlddY8f1L6Qw_iMzJZLl5Jjv7dOGNkEeUX1UTywCgQJ_sDbgtUZYbrXJObMkjOu3JquXwCiXFBmwfE8H2ooUgeK9SOh1D5zAjalk-zes8sLvuoc1s3iLTExV5ikjjLErDiSaxqryGLlCHkYbxEjAgihPnJwYHWNrGgkcg/w420-h398/Captura.JPG",
                },
                chatWindow: {
                    welcomeMessage: "¡Hola! \nPara resolver los mayores retos de nuestro tiempo, necesitamos mentes brillantes con la ambición de hacer posible lo imposible. Siemens es tu lugar para prosperar, desafiar y crecer en un equipo diverso de innovadores que comparten su pasión por la tecnología. ¿Estás dentro?",
                    backgroundColor: "#ffffff",
                    height: 500,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWkscMERkq3kFVILkZS89EmcQlddY8f1L6Qw_iMzJZLl5Jjv7dOGNkEeUX1UTywCgQJ_sDbgtUZYbrXJObMkjOu3JquXwCiXFBmwfE8H2ooUgeK9SOh1D5zAjalk-zes8sLvuoc1s3iLTExV5ikjjLErDiSaxqryGLlCHkYbxEjAgihPnJwYHWNrGgkcg/w420-h398/Captura.JPG",
                    },
                    userMessage: {
                        backgroundColor: "#0098A6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://cdn-icons-png.flaticon.com/512/747/747545.png",
                    },
                    textInput: {
                        placeholder: "Escribe aquí",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#0098A6",
                    }
                }
            }}
        />
    );
};

export default Chat; 

