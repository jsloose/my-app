
import './dragList.css'

const DragList = () => {

    const NameList = (props) => {
        return (
            <div>
                <div>
                    <center>
                        {props.entry}
                    </center>
                </div>
            </div>
        );
    }

    const npcNames = ['Monster 1','Monster 2','Monster 3','Monster 4'];

    return (
        <div>
            <div className="dragMenu">
                {npcNames.map((name) => <NameList entry={name} />)}
            </div>
        </div>
    );
};

export default DragList;