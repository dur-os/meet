import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Database from 'react-icons/lib/fa/database';

const styles = {
    textDecoration: 'none'
};

export const menuItems = (
    <div>
        <Link to="/DataBaseTool" style = { styles } >
            <ListItem button>
                <ListItemIcon>
                    <Database />
                </ListItemIcon>
                <ListItemText primary="DataBase Tool"/>
            </ListItem>
        </Link>
    </div>
);