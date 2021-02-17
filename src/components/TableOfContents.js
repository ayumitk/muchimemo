import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import theme from '../../config/theme'

const useStyles = makeStyles(() => ({
  root: {
    background: 'rgba(0, 0, 0, 0.05)',
    margin: `1rem 0`,
    '& .MuiAccordionSummary-root': {
      justifyContent: `center`,
      '& .MuiAccordionSummary-content': {
        flexGrow: 0,
      },
    },
    '& ol': {
      width: `100%`,
      margin: 0,
      paddingLeft: `1.5rem`,
      '& li': {
        color: `${theme.colors.primary}`,
        fontWeight: `bold`,
        fontSize: `0.875rem`,
        '& a': {
          display: `block`,
          color: `${theme.colors.grey.default}`,
          padding: '0.5rem 0',
          fontWeight: `normal`,
          borderBottom: `solid 1px rgba(0, 0, 0, 0.1)`,
        },
        '& ol': {
          listStyle: 'disc',
          padding: `0.25rem 0 0.75rem 1rem`,
          '& li': {
            '& a': {
              padding: '0.25rem 0',
              border: 0,
            },
          },
        },
      },
    },
  },
}))

function TableOfContents({ tableOfContents, tocSub }) {
  const classes = useStyles()
  if (tableOfContents.items) {
    return (
      <Accordion className={classes.root} defaultExpanded="true">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>この記事の目次</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ol>
            {tableOfContents.items.map(first => (
              <li key={first.title}>
                <a href={first.url}>
                  <span dangerouslySetInnerHTML={{ __html: first.title }} />
                </a>
                {first.items && tocSub === true ? (
                  <ol>
                    {first.items.map(second => (
                      <li key={second.title}>
                        <a href={second.url}>
                          <span dangerouslySetInnerHTML={{ __html: second.title }} />
                        </a>
                      </li>
                    ))}
                  </ol>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ol>
        </AccordionDetails>
      </Accordion>
    )
  }
}

export default TableOfContents

TableOfContents.propTypes = {
  tableOfContents: PropTypes.object,
  tocSub: PropTypes.bool,
}

TableOfContents.defaultProps = {
  tableOfContents: null,
  tocSub: false,
}
