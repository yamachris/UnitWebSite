import {Square} from "@/app/pages/main/main";

type SquareProps = {
    square: Square
};


export function Square({square}: SquareProps) {
    return (
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
                <div className="icon"><i className={square.icon}></i></div>
                <h4 className="title"><a href="">{square.title}</a></h4>
                <p className="description">{square.description}</p>
            </div>
        </div>
    );
}