import React from 'react'
import { Pagination, Table } from 'semantic-ui-react'
import { UseAppDispatch, UseAppSelector } from '../../app/store/configureStore'
import { PageChange } from '../../app/store/Slice/AccountSlice';



export default function TableFooters(){

    const dispatch = UseAppDispatch();
    const {AccountData} = UseAppSelector(state => state.accounts)

    return (
        <Table.Footer>
            <Table.Row>
                <Pagination
                    defaultActivePage={1}
                    firstItem={null}
                    lastItem={null}
                    pointing
                    secondary
                    totalPages={AccountData.totalPage}
                    activePage={AccountData.pageNumber.activePage}
                    onPageChange = {(e, { activePage }) => dispatch(PageChange({ activePage }))}
                />
            </Table.Row>
        </Table.Footer>
    )
}