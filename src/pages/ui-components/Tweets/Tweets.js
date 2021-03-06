import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setPageSize, selectPageSize } from "./TweetsSlice";
import { createUseStyles } from "react-jss";
import { styles } from "./styles";
import { commonStyles } from "common/styles";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

const { SearchBar, ClearSearchButton } = Search;

const columns = [
  {
    dataField: "id",
    text: "Tweet ID",
    footerAlign: "left",
    headerStyle: () => {
      return { width: "40%" };
    },
    style: { wordBreak: "break-word" },
  },
  {
    dataField: "text",
    text: "Text",
  },
];

function Tweets({ score, tweets }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pageSize = useSelector(selectPageSize);

  const paginationOptions = {
    sizePerPage: pageSize,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "15",
        value: 15,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "All",
        value: tweets.length,
      },
    ],
    onSizePerPageChange: (size) => {
      dispatch(setPageSize(size));
    },
  };

  if (score !== null) {
    return (
      <div className={classes.tweetsContainer}>
        <ToolkitProvider keyField="id" data={tweets} columns={columns} search>
          {(props) => {
            return (
              <div>
                <div className={classes.searchPanel}>
                  <SearchBar
                    {...props.searchProps}
                    placeholder="Tweets search"
                    className={classes.searchBar}
                  />
                  <ClearSearchButton
                    {...props.searchProps}
                    className={classnames(
                      classes.button,
                      classes.clearBtn,
                      classes.center
                    )}
                  />
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory({ ...paginationOptions })}
                />
              </div>
            );
          }}
        </ToolkitProvider>
      </div>
    );
  }

  return null;
}

export default Tweets;
