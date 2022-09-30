import "./Subbanner.css";

function Subbanner({label,label1}) {
    return <>
        <div className="page">
            <div className="row1">
                <label> {label}</label>
            </div>
            <div className="row2">
                <div className="row2_b1">
                    <button>Home </button>
                    <label>.</label>
                </div>
                <div className="row2_b2">
                    <button>Pages</button>
                    <label>.</label>
                </div>
                <div className="row2_b2">
                    <button>{label1} </button>
                </div>
            </div>
        </div>
    </>
}
export default Subbanner; 