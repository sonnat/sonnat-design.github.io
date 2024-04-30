import { SonnatOThin, Twitter, Virgool } from "@sonnat/icons";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import createClassName from "classnames";
import Link from "next/link";
import * as React from "react";

const componentName = "Footer";

interface Props {
  className?: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      breakpoints,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        display: "flex",
        alignItems: "center",
        height: pxToRem(72),
        marginTop: pxToRem(128),
        justifyContent: "space-between",
        borderTop: `1px solid ${colors.divider}`
      },
      navigation: { display: "flex", alignItems: "center" },
      logo: {
        marginLeft: pxToRem(16),
        cursor: "pointer",
        color: colors.text.secondary,
        transition: [
          "opacity 360ms ease",
          "visibility 360ms ease",
          "color 360ms ease"
        ].join(", "),
        "&:hover": {
          color: colors.text.primary
        }
      },
      navigationList: {
        padding: "0",
        margin: "0",
        listStyle: "none",
        display: "flex",
        alignItems: "center"
      },
      navigationItem: {
        padding: pxToRem(8),
        cursor: "pointer",
        "&:hover > $navigationItemLink": { color: colors.text.primary }
      },
      navigationItemLink: {
        color: colors.text.secondary,
        transition: "color 360ms ease"
      },
      navigationDivider: {
        width: pxToRem(1),
        height: pxToRem(16),
        backgroundColor: colors.divider
      },
      socials: { display: "flex", alignItems: "center" },
      social: {
        marginRight: pxToRem(8),
        cursor: "pointer",
        transition: "color 360ms ease",
        color: colors.text.secondary,
        "&:hover": { color: colors.text.primary }
      },
      [breakpoints.down("sm")]: {
        root: {
          paddingTop: pxToRem(16),
          paddingBottom: pxToRem(16),
          height: "auto",
          flexDirection: "column"
        },
        navigation: { flexDirection: "column" },
        navigationList: { marginTop: pxToRem(16), marginBottom: pxToRem(16) },
        social: {
          marginLeft: pxToRem(8),
          marginRight: pxToRem(8)
        },
        logo: {
          marginLeft: 0
        }
      }
    };
  },
  { name: componentName }
);

const Footer = React.memo(function Footer(props: Props) {
  const { className } = props;

  const classes = useStyles();

  return (
    <footer className={createClassName(classes.root, className)}>
      <nav className={classes.navigation}>
        <Link href="/">
          <a title="Home" className={classes.logo}>
            <SonnatOThin size={32} title="Sonnat Design System's Logo" />
          </a>
        </Link>
        <ul className={classes.navigationList}>
          <li className={classes.navigationItem}>
            <Link href="/components" passHref>
              <Text
                title="کامپوننت‌ها"
                rootNode="a"
                variant="caption"
                className={classes.navigationItemLink}
              >
                کامپوننت‌ها
              </Text>
            </Link>
          </li>
          <li className={classes.navigationDivider}></li>
          <li className={classes.navigationItem}>
            <Link href="https://survey.porsline.ir/s/OhdJ36r" passHref>
              <Text
                title="بازخورد"
                rootNode="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="caption"
                className={classes.navigationItemLink}
              >
                ارسال بازخورد
              </Text>
            </Link>
          </li>
          <li className={classes.navigationDivider}></li>
          <li className={classes.navigationItem}>
            <Link
              href="https://careers.divar.ir/positions#department=Design%20and%20UX"
              passHref
            >
              <Text
                title="فرصت‌های شغلی"
                rootNode="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="caption"
                className={classes.navigationItemLink}
              >
                فرصت‌های شغلی
              </Text>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.socials}>
        <Link href="https://twitter.com/sonnatdesign" passHref>
          <a title="Twitter" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} className={classes.social} />
          </a>
        </Link>
        <Link href="https://virgool.io/DivarDesign" passHref>
          <a title="Virgool" target="_blank" rel="noopener noreferrer">
            <Virgool size={24} className={classes.social} />
          </a>
        </Link>
      </div>
    </footer>
  );
});

Footer.displayName = componentName;

export default Footer;
