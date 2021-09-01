<script lang="tsx">
import { defineComponent, ref } from '@vue/runtime-core';

export default defineComponent({
  name: 'CollapseItme',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const isActive = ref(false);
    const toggle = () => {
      isActive.value = !isActive.value;
    };

    return () => {
      const { title } = props;

      return (
        <ol>
          <div class="collapse-parent" onClick={toggle}>
            <span
              class={`toogle-icon ${isActive.value ? '' : 'closed'}`}
            ></span>
            <span class="title">{title}</span>
          </div>
          <div class={`collapse-content ${isActive.value ? 'active' : ''}`}>
            <ul>{slots.default?.()}</ul>
          </div>
        </ol>
      );
    };
  }
});
</script>

<style lang="scss">
ol {
  //   &.introduce {
  //     padding-left: 5px;
  //     li {
  //       cursor: pointer;
  //       &:hover {
  //         color: $doc-default-color;
  //       }
  //     }
  //   }
  .collapse-parent {
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: $doc-default-nav-color;
    font-weight: bold;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    .title {
      margin-left: 15px;
      &:hover {
      }
    }
    .toogle-icon {
      &.closed {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='%23ccc' d='M3 2.16666667L6.72972973 6 3 9.83333333 4.13513514 11 9 6 4.13513514 1z' fill-rule='evenodd'/%3e%3c/svg%3e");
        transform: rotate(0);
      }
      width: 12px;
      height: 12px;
      transition: transform 0.3s;
      transform: rotate(90deg);
      background-repeat: no-repeat;

      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='%23ccc' d='M3 2.16666667L6.72972973 6 3 9.83333333 4.13513514 11 9 6 4.13513514 1z' fill-rule='evenodd'/%3e%3c/svg%3e");
    }
  }
  .collapse-content {
    display: none;
    &.active {
      display: block;
    }
    ul {
      li {
        font-size: 14px;
        // font-weight: bold;
        padding-left: 29px;
        min-height: 28px;
        cursor: pointer;
        position: relative;
        &:hover {
          a {
            color: $doc-default-color;
          }
        }
        a {
          &.router-link-active,
          &.active {
            color: $doc-default-color !important;
            &:before {
              content: '';
              display: block;
              width: 4px;
              height: 4px;
              border-radius: 2px;
              background-color: $doc-default-color;
              position: absolute;
              left: 22px;
              top: 8px;
            }
          }

          &:hover {
            color: $doc-default-color;
            &:visited {
              color: $doc-default-color;
            }
          }
          &:link,
          &:visited {
            color: #1a1a1a ;
          }

          height: 100%;
          b {
            font-weight: normal;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
