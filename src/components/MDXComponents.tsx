import type { MDXComponents } from 'mdx/types'

// const TableWrapper = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="overflow-x-auto w-full">
//       <table>
//         {children}
//       </table>
//     </div>
//   )
// }

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // table: TableWrapper,
    ...components,
  }
}
