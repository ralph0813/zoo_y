import './unreset.scss'

function createMarkup(element: string) {
  return { __html: element }
}

export default function ShowRich({ body }: { body: string }) {
  return <div className="unreset" dangerouslySetInnerHTML={createMarkup(body)} />
}


