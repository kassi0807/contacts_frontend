export const ConfirmAction = ({action, status}) =>
<button className={
        status === "pending" ? 
        "btn btn-primary disabled":
        "btn btn-primary"
    }
    onClick={action}>
    { status === "pending" ?
        <span className="spinner-border spinner-border-sm"></span>:
        <span className="bi-arrow-right p-1"></span>
    }
    <span className="px-3">confirm</span>
</button>