const Color = (props) => {

    return (

            <div style={{ backgroundColor: props.box.color, width: props.box.size + 'px', height: props.box.size + 'px' }}></div>


    );
};

export default Color;