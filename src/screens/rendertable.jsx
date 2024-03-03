import { Box, Button, Flex, Select, Th,Tr,Table, Tbody, Td, Text, Thead, useColorModeValue } from '@chakra-ui/react';

import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table';


const RenderTable = ({columns, data}) => {
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
    const table = useReactTable({
		data,
		columns,
		
		
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true
	});
    // const table = useReactTable(tableOptions); 
    return (
        
            <Box overflowX="auto">
              <Table bg="white"  border="1px solid #D9D9D9" variant='simple' color='gray.900' mb='24px' mt="10px">
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr  border="1px solid #D9D9D9"
							 key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th
											key={header.id}
											colSpan={header.colSpan}
											border="1px solid #D9D9D9"
											bg='#EDF3F8'
											borderColor={borderColor}
											cursor='pointer'	
											onClick={header.column.getToggleSortingHandler()}>
											<Flex
												justifyContent='space-between'
												align='center'
												fontSize='10px'
												fontWeight='normal'
												>
												{flexRender(header.column.columnDef.header, header.getContext())}{{
													asc: '',
													desc: '',
												}[header.column.getIsSorted()] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.map((row) => {
							return (
								<Tr 
								border="1px solid #D9D9D9"
								key={row.id} 
								borderColor="black">
									{row.getVisibleCells().map((cell) => {
										return (
											<Td  border="1px solid #D9D9D9"
												key={cell.id}
												
												// minW={{ sm: '100px', md: '150px', lg: 'auto' }}
												
												>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										);
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
            
              <Flex>
                <Button
                
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'<<'}
                </Button>
                <Button
                  
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'<'}
                </Button>
                <Button
                  className="border rounded p-1"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {'>'}
                </Button>
                <Button
                  className="border rounded p-1"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {'>>'}
                </Button>
                <Text className="flex items-center gap-1">
                  <div>Page</div>
                  <Text>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                  </Text>
                </Text>
               
                <Select
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value))
                  }}
                >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </Select>
              </Flex>
             
            
            </Box>
          );
        

}
 
export default RenderTable;