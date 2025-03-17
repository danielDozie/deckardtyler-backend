import { Car } from "lucide-react"
import { Preview } from "sanity"

export const customStructure = (S: any) =>
  S.list()
    .title('Cars')
    .items([
      S.listItem()
        .title('Cars')
        .icon(Car)
        .child(
          S.documentTypeList('comment')
            .defaultOrdering([{field: 'author', direction: 'asc'}])
        ),
      S.divider(),
    ])

export const defaultDocumentNode = (S: any) =>
  S.document().views([
    S.view.form(),
    S.view.component(Preview).title('Preview')
  ])