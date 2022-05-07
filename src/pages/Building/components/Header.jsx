import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Menu, Message } from 'semantic-ui-react';

import BuildingToolbar from './BuildingToolbar';

export default function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const onReturnClick = useCallback(() => {
    const [, coords] = location.pathname.split('/');
    navigate(`/${coords}${location.search}`);
  }, [location, navigate]);

  return (
    <>
      <Menu secondary>
        <Menu.Item fitted>
          <Button
            content="Return"
            icon="left arrow"
            labelPosition="left"
            onClick={onReturnClick}
          />
        </Menu.Item>
      </Menu>

      <Menu secondary>
        <BuildingToolbar />
      </Menu>

      <Message info>
        <p>
          Data might be inaccurate. Some people provide wrong locations for
          their classifieds.
        </p>
      </Message>
    </>
  );
}

Header.propTypes = {};
