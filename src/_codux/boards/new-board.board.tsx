import { createBoard } from '@wixc3/react-board';
import { Card, H5, Button, Icon, Navbar, TabId, Alignment, Tabs, Tab } from '@blueprintjs/core';
import { useState } from 'react';

export default createBoard({
    name: 'New Board',
    Board: () => {
        const [navbarTabId, setNavbarTabId] = useState<TabId>('Home');

        const handleNavbarTabChange = (navbarTabId: TabId) => setNavbarTabId(navbarTabId);
        return (
            <Card elevation={3}>
                <Navbar>
                    <Navbar.Group>
                        <Navbar.Heading>
                            Page: <strong>{navbarTabId}</strong>
                        </Navbar.Heading>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <Tabs
                            animate
                            fill
                            id="navbar"
                            onChange={handleNavbarTabChange}
                            selectedTabId={navbarTabId}
                        >
                            <Tab id="Home" title="Home" />
                            <Tab id="Files" title="Files" />
                            <Tab id="Builds" title="Builds" />
                        </Tabs>
                    </Navbar.Group>
                </Navbar>
                <Icon icon={'calendar'} size={30} intent="primary" />
                <H5>
                    <a href="#"> Analytical applications</a>
                </H5>
                <p>
                    User interfaces that enable people to interact smoothly with data, ask better
                    questions, and make better decisions.
                </p>
                <Button text="Explore products" />
            </Card>
        );
    },
    isSnippet: true,
});
