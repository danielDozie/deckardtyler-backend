import {
  Settings,
  FileText,
  Users,
  Tag,
  Newspaper,
  MessageSquare,
  Mail,
  Folder,
  MessageCircleMore,
  PanelsTopLeft,
  Columns2,
  User,
  BookOpen,
  FolderOpenDot
} from 'lucide-react'

export const deskStructure = (S: any) =>
  S.list()
    .title('Admin dashbaord')
    .items([
      // Content
      S.listItem().title('Posts').icon(Newspaper).child(S.documentTypeList('post')),
      S.listItem().title('Post Categories').icon(Tag).child(S.documentTypeList('postCategory')),
      S.listItem().title('Pages').icon(Columns2).child(S.documentTypeList('page')),
      S.listItem().title('Services').icon(FileText).child(S.documentTypeList('service')),
      S.listItem().title('Research').icon(BookOpen).child(S.documentTypeList('research')),
      S.listItem().title('Projects').icon(FolderOpenDot).child(S.documentTypeList('project')),
      S.divider(),
      
      // Taxonomies
      S.listItem().title('Team').icon(Users).child(S.documentTypeList('teamMember')),
      S.listItem().title('Clients').icon(User).child(S.documentTypeList('client')),
      S.listItem().title('Author').icon(User).child(S.documentTypeList('author')),
      S.listItem().title('Menu').icon(PanelsTopLeft).child(S.documentTypeList('menu')),
      S.listItem().title('Comments').icon(MessageCircleMore).child(S.documentTypeList('comment')),
      S.divider(),
      
      // Communications
      S.listItem().title('Contact Messages').icon(MessageSquare).child(S.documentTypeList('message')),
      S.listItem().title('Newsletter Subscribers').icon(Mail).child(S.documentTypeList('subscriber')),
      S.divider(),
      
      // Management
      S.listItem().title('Document Manager').icon(Folder).child(S.documentTypeList('documentManager')),
      S.listItem()
        .title('Site Settings')
        .icon(Settings)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings'))
    ])