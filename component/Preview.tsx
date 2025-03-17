import { Newspaper } from "lucide-react";

export default function Preview(props: any) {
    return (
      <div>
        {props.renderDefault(props)}
      </div>
    )
  }